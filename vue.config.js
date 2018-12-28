module.exports = {
    baseUrl: '/data_table_test/',
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/base/_settings.scss";
                    @import "@/styles/base/_base.scss";
                    @import "@/styles/components/_container.scss";
                    @import "@/styles/components/_header.scss";
                    @import "@/styles/components/_button.scss";
                    @import "@/styles/components/_data_table.scss";

                    @import "~noty/src/noty.scss";
                    @import "~noty/src/themes/mint.scss";
                `
            }
        }
    }
}