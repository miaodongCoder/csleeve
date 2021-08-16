import { Http } from "../utils/http";

export class Category {
    static async getHomeGridCategory() {
        const result = await Http.request({
            url: 'category/grid/all',
        });
        return result.data;
    }
}