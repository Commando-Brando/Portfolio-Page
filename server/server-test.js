let test = null

module.exports = {
    CBDB: {
        getByKey: async (key, response) => {
            setTimeout(() => {
                data = "hello world"
                return data;
            }, 3000)
        }
    }
}