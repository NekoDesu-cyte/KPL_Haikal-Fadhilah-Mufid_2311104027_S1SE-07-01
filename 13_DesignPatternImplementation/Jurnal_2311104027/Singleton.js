const Singleton = (function () {
    let instance;
    function create() {
        return { name: "Only One" };
    }
    return {
        getInstance: function () {
            if (!instance) instance = create();
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
console.log(instance1);
