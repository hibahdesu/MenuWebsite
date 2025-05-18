import './SideMenu.css';
// import Button from './Button';
import Articles from './Articles';

export default function SideMenu() {
    return (
        <div className='side-menu'>
            <Articles image={"./images/11.png"} title={"Black Friday deal: Free Pizza with each purches"} />
        </div>
    )
}