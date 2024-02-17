// pages/NotFound.tsx
import './NotFound.css'; // Assuming you will create a separate CSS file for this component

const NotFound = () => {
    return (
        <div className="not-found-container bg-opacity-20">
            <h1 className="not-found-title">Oops!</h1>
            <p className="not-found-text">We can't seem to find the page you're looking for.</p>
            <a href="/" className="not-found-home-link">Go Home</a>
        </div>
    );
};

export default NotFound;
