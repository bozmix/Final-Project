import "./Footer.css";

export const Footer = () => {

/*     let lastMod = new Date(localStorage.getItem("lastModBitPeople2303")); */

/*     function timeSince(date) {

        let seconds = Math.floor((new Date() - date) / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    } */


    return (
        <footer className="navbar text-dark fixed-bottom row border border-dark footer">
            <div className="container-fluid">
                <div className="text-start p-1 mx-5">© 2021 Copyright BIT Students</div>
{/*                 <div className="text-end p-1 mx-5 ">Last update: {{timeSince(lastMod)}} ago</div> */}
            </div>
        </footer>
    );
};