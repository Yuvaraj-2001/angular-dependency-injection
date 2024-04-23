class userService{
    sayHi(){
        console.log("hii")
    }
}

class Component{
    constructor(public user: userService){}
}

// "Angular" DI
// In the angular service is singleton in the scope injector. That means we have the container 
// to storing our service instances

// we will be giving the existing one, but not the new one.
class Injector{
    private _container = new Map();
    constructor(private _provs:any[] = []){
        this._provs.forEach(service => {
            this._container.set(service, new service())
        })
    }

    get(service:any){
        const serviceInstance = this._container.get(service);
        if(!serviceInstance){
            throw new Error('No provider found');
        }
        return serviceInstance;
    }
}

// somewhere in application
const injector = new Injector([userService]);
const component = new Component(injector.get(userService));
component.user.sayHi();

// Not exactly but like this we will have


// ANgular have injector, 2 injector, module injector and hirarchy injector
// 
