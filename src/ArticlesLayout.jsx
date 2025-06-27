import { Outlet } from "react-router-dom";
export default function ArticlesLayout() {
    return (
        <>
         <div>
            <Outlet />
        </div>
        <div style={{
                position: "relative",
            }}>
            <img src="/images/bgb.png" alt="" style={{
                position: "absolute",
                bottom: '0', 
                left: '0',
                index: '-1',
                width: '25%',
                opacity: '0.15'
            }}/>
        </div>
        </>
    );
}


