let corporation = {
    corporation_1: {
        name: "KEFIR",
        workers: {
            manager: {
                name: "Денис",
            },
            worker: {
                name: "Василий",
            }
        }
    },
    corporation_2: {
        name: "Valve",
        workers: {
            manager: {
                name: "Bob",
            },
            worker: {
                name: "Stan",
            }
        }
    },
};

for (let i in corporation) {
    console.log(corporation[i].name);
    for (let j in corporation[i].workers) {
        console.log(corporation[i].workers[j].name)
    };
};