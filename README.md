# Screenshots


# Features
- Role Based Access Control
- Responsive Design
- Modal Form
- Bulk Action
- Light/Dark Mode
- Toast Notification
- Rich Feature Datatable Serverside
- Tooltip
- Localization (EN/ID)
- SSR (Server Side Rendering)
# Requirements
- Php 8
- Composer
- Mysql
- Apache
# Installation
``` bash
git clone https://gitlab.com/2coms_devteam/jobfair-365.git
cd jobfair-365
composer update
npm install
cp .env.example .env
php artisan key:generate

SETTING UP DB CONNECTION IN .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jobfair-365
DB_USERNAME=root
DB_PASSWORD=

(optional)
php artisan migrate:fresh --seed

START THE SERVER
npm run dev
php artisan serve
```
## Login With
### Superadmin
``` bash
email : superadmin@superadmin.com
password : superadmin
```
### Admin
``` bash
email : admin@admin.com
password : admin
```
### Operator
``` bash
email : operator@operator.com
password : operator
```
### gitignore
``` bash
Make sure .gitignore added in you files
```

### Git Config
``` Git
git config --global user.name "Your name"
git config --global user.email "Your email"
```
#### Git code commits
``` Git
git add .
git commit -m "Message commit"
git push --set-upstream <branch>
```

# Packages
- [Vue](https://vuejs.org/)
- [Inertia](https://inertiajs.com/)
- [Tailwind](https://tailwindcss.com/)
- [Spatie](https://spatie.be/docs/laravel-permission/v5/introduction)
- [Floating Vue](https://floating-vue.starpad.dev/)
- [VueUse](https://vueuse.org/)
- [Hero Icons](https://heroicons.com/)
- [HeadlessUI](https://headlessui.com/)