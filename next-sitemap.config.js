/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://www.rezaazin.com";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: [
                    "/profile",
                    "/blogs/search",
                    "/blogs/search",
                    "/courses/search",
                ],
            },
            { userAgent: "*", allow: "/" },
        ],
    },
    exclude: ["/profile", "/blogs/search", "/blogs/search", "/courses/search"],
};
