import './portal.scss';
const fn = (arg = 1) => {
    if (arg === 1) return 1;
    return arg * fn(arg - 1);
};
fn(12);
