import React from 'react';

const Footer = () => {
    return (

<footer className="bg-blue-100/80 font-sans dark:bg-gray-900 mx- auto ">
    <div className="container px-6 py-12 mx-auto">
    
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 BD Prime News. All rights reserved.</p>
    </div>
</footer>

    );
};

export default Footer;