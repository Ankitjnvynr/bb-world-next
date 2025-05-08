import React from 'react';

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative">
                <img
                    src="/images/hero/term2.jpeg"
                    alt="Hero Image"
                    className="w-full h-screen object-cover"
                />
                <div
                    className="absolute text-white font-bold leading-tight
                    top-[60%] left-6 xs:top-[65%] xs:left-6 xs:w-48 xs:text-2xl xs:px-4 
                    sm:top-[60%] sm:left-10 sm:w-64 sm:text-3xl sm:px-6
                    md:top-[50%] md:left-16 md:w-[35rem] md:text-5xl md:px-8
                    lg:top-[40%] lg:left-16 lg:w-[40rem] lg:text-6xl lg:px-10
                    xl:top-[35%] xl:left-20 xl:w-[50rem] xl:text-7xl xl:px-12"
                >
                    {/* Example text can be added here */}
                    
                </div>
            </div>

            {/* Description Section */}
            <div className="bg-white px-4 xs:px-6 md:px-12 lg:px-24 py-12 space-y-6 text-gray-800">
                {/* Definitions */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Definitions
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    The following Terms and Conditions document is a legal agreement between Web India Solutions, hereafter “BIG BYTE INNOVATIONS PRIVATE LIMITED”, and “the Client” for the purposes of website design or development and other services provided by BIG BYTE INNOVATIONS PRIVATE LIMITED. These Terms and Conditions set forth the provisions under which the Client may use the services supplied.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    The BIG BYTE INNOVATIONS PRIVATE LIMITED is an Internet web design provider offering the Client graphical design, HTML, CSS, Javascript, PHP, and other related computer programming languages. BIG BYTE INNOVATIONS PRIVATE LIMITED also provides Print designs, Corporate Branding and Identity, Social Media Promotions, and Mobile App development.
                </p>

                {/* Initial Work */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Initial Work
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    BIG BYTE INNOVATIONS PRIVATE LIMITED will commence the project after getting the required materials from the Client. The home page/mock-up/design would be shown within 5 (may vary) working days. The number of days to complete the home page/application design may vary according to the requirement of the Client. The Client needs to give a definite idea of the design/theme/colour and all aspects of the website/application/project at the time of preliminary discussion and before commencing the project. The Client can provide samples or older websites/applications as reference. The BIG BYTE INNOVATIONS PRIVATE LIMITED team will be creating website/application pages based on these ideas.
                </p>

                {/* Content Clauses */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Content Clauses
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Project will commence within 24 hours after the advance payment is made by the Client. The content for the concerned website/application/project should be provided within 7 days from the time of starting the project. If the content is not provided within 7 days, there will be an additional charge of 5% of the total project cost. The Client will be granted an extended 10 days by the BIG BYTE INNOVATIONS PRIVATE LIMITED to provide the content after paying the additional amount. The project is considered invalid if the Client fails to provide the content within the extended time period. Once the project is cancelled, the payment is not refundable.
                </p>

                {/* Alteration Work */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Alteration Work
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    In case of any alterations, the changes should be informed within the first three days after the initial work has been submitted. BIG BYTE INNOVATIONS PRIVATE LIMITED will not undertake any further works unless confirmed by the Client at the specified time period.
                </p>

                {/* Redesign Clauses */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Redesign Clauses
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    If changes are suggested by the Client after the completion and approval of the entire website/application/project, it will be considered as redesign and are chargeable. Detection of errors in contents or designs by the Client, if any, will be rectified immediately. After completion of the project, BIG BYTE INNOVATIONS PRIVATE LIMITED will upload the whole work in the server and the link will be sent to the Client for testing. The whole work will be uploaded and transferred/made live by BIG BYTE INNOVATIONS PRIVATE LIMITED after the final approval and settlement of the balance amount by the Client.
                </p>

                {/* Free Maintenance */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Free Maintenance
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    BIG BYTE INNOVATIONS PRIVATE LIMITED provides one year free maintenance towards all kinds of errors occurred in run time of the website/application/project. Free maintenance does not include content updation.
                </p>

                {/* Quotation Validity */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Quotation Validity
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    The quotation is valid for 7 days. Prices are subject to change without notice after the expiry of the quotation.
                </p>

                {/* Material Rights */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Material Rights
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Web India Solutions reserves the right to refuse to handle any media that is unlawful or inappropriate. Media that contains a virus or hostile program, media that constitutes harassment, racism, violence, obscenity, harmful intent, or spamming, or media that constitutes a criminal offense, or infringes privacy or copyright.
                </p>

                {/* Contact Us Button */}
                <div className="text-start md:text-center lg:text-start mt-4">
                    <a href="contact-us">
                        <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300">
                            Contact Us
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Hero;
