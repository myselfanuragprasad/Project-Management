<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Http\Requests\Task\TaskInsertRequest;
use App\Http\Requests\Task\TaskUpdateRequest;


class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::query();
        if ($request->has('search')) {
            $tasks->where('task_name', 'LIKE', "%" . $request->search . "%");
            $tasks->orWhere('task_status', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $tasks->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 5;


        return Inertia::render('Admin/Task/Index', [
            'title'         => __('app.label.task'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'tasks'         => $tasks->paginate($perPage),
            'breadcrumbs'   => [['label' => __('app.label.task'), 'href' => route('tasklist.dashboard')]],
        ]);
    }

    public function store(TaskInsertRequest $request)
    {
        DB::beginTransaction();

        try {
            // Create the task record
            $taskCreate = Task::create([
                'task_name' => $request->task_name,
            ]);

            // If the task is created successfully, process the file upload
            if ($taskCreate) {
                $this->handleFileUpload($taskCreate->id, $request);
            }

            DB::commit();

            // Redirect to the task list with a success message
            return redirect()->route('tasklist.dashboard')
                ->with('success', __('app.label.created_successfully', ['name' => $request->task_name]));
        } catch (\Throwable $th) {
            // Rollback transaction on error
            DB::rollback();

            // Return with error message
            return back()->with('error', __('app.label.updated_error', ['name' => $request->task_name]) . ' ' . $th->getMessage());
        }
    }

    public function update(TaskUpdateRequest $request, $id)
    {

        DB::beginTransaction();

        try {
            // Find the task by ID
            $task = Task::findOrFail($id);

            // Update the task fields (task name, status, etc.)
            $task->update([
                'task_name' => $request->task_name,
                'task_status' => $request->task_status,
            ]);


            // Handle file upload (if a new file is provided)
            if ($task) {

                // Process the file upload
                $this->handleFileUpload($id, $request);
            }

            DB::commit();

            // Redirect to the task list with a success message
            return redirect()->route('tasklist.dashboard')
                ->with('success', __('app.label.updated_successfully', ['name' => $request->task_name]));
        } catch (\Throwable $th) {
            // Rollback transaction on error
            DB::rollback();

            // Return with error message
            return back()->with('error', __('app.label.updated_error', ['name' => $request->task_name]) . ' ' . $th->getMessage());
        }
    }

    public function edit($id)
    {
        $task = Task::where('id', $id)->first();

        return Inertia::render('Admin/Task/Edit', [
            'title'       => __('app.label.edit_task'),
            'task' => $task,
            'breadcrumbs' => [
                ['label' => 'Task List', 'href' => route('tasklist.dashboard')],
                ['label' => $task->task_name],
            ],

        ]);
    }

    /**
     * Handle the file upload for the task
     * 
     * @param int $taskId
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    private function handleFileUpload($taskId, $request)
    {

        $file = $request->file('task_file');

        // If file is uploaded, process the file
        if ($file) {


            $fileName = $this->generateFileName($file);

            $taskDocsFolder = $this->getTaskDocsFolderPath($taskId);

            // Ensure the directory exists
            $this->ensureDirectoryExists($taskDocsFolder);

            // Check if a file already exists and if so, just upload the new file without deleting the old one
            // Optionally, you could keep the old file and add a timestamp or unique identifier to the new file
            $existingFilePath = $taskDocsFolder . '/' . $fileName;

            // If the file exists, generate a new name (optional)
            if (File::exists($existingFilePath)) {
              
                $fileName = $this->generateFileName($file);
            }

            // Move the uploaded file to the task directory
            $file->move($taskDocsFolder, $fileName);

            // Update the task record with the new file name
            Task::where('id', $taskId)->update([
                'file_attachment' => $fileName,
            ]);
        }
    }

    /**
     * Generate a unique file name using a timestamp and file extension
     * 
     * @param \Illuminate\Http\UploadedFile $file
     * @return string
     */
    private function generateFileName($file)
    {
        $timestamp = now()->format('YmdHis');
        return
            'task_file_' . now()->format('YmdHis') . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
    }

    /**
     * Get the folder path where task files should be stored
     * 
     * @param int $taskId
     * @return string
     */
    private function getTaskDocsFolderPath($taskId)
    {
        return public_path('task_docs/' . $taskId);
    }

    /**
     * Ensure the task folder exists, create it if not
     * 
     * @param string $folderPath
     * @return void
     */
    private function ensureDirectoryExists($folderPath)
    {
        if (!File::exists($folderPath)) {
            // Create the directory if it doesn't exist
            File::makeDirectory($folderPath, 0777, true);
        }
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        try {

            $task->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => $task->task_name]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $task->task_name]) . $th->getMessage());
        }
    }

    public function destroyBulk(Request $request)
    {
        try {
            $task = Task::whereIn('id', $request->id);
            $task->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('app.label.task')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('app.label.task')]) . $th->getMessage());
        }
    }
}
