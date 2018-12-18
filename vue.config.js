module.exports = {
   css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/base/_settings.scss";
                    @import "@/styles/base/_base.scss";
                    @import "@/styles/components/_container.scss";
                    @import "@/styles/components/_header.scss";
                    @import "@/styles/components/_button.scss";
                `
            }
        }
    }
}