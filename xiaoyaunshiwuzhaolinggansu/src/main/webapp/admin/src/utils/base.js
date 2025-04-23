const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyaunshiwuzhaolinggansu/",
            name: "xiaoyaunshiwuzhaolinggansu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyaunshiwuzhaolinggansu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园失物招领平台"
        } 
    }
}
export default base
