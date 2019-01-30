// import './admin.css';
require('./admin.css');
const admins = [];
for (let i = 0; i < 11; i++) {
    admins.push(i);
}
const adminIds = admins.map(item => item.id);
