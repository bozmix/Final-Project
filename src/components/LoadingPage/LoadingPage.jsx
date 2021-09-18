import "./LoadingPage.css";
import loadingImage from "./assets/loadingScreen.gif";

export const LoadingPage = () => {
    return (
        <div className="loadingImageDiv">
            <img className="loadingImage text-center" src={loadingImage} alt="Loading..." />
        </div>
    )
}