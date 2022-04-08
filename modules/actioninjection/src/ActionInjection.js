/**
 * Action injection using interfaces (overriding methods and injecting actions).
 * 
 * @file ActionInjection.js
 * @description Shows an example of injecting actions using interfaces
 * @author pavl_g.
 */
class Action {
     /**
      * Member method, override and write some code in order to use.
      * 
      * @example
      *  const action = new Action();
      *  action.run = function run(args) {
      *      console.log("TODO-Something When invoked !");
      *  }
      * 
      * @param {*} args 
      */
     run(args){
     }
}

/**
 * Tests invoking an action remotely.
 * 
 * @author pavl_g.
 */
class TestInjector {
    /**
     * Invokes an action passing in some basic params (eg : a return values from a system resource).
     * 
     * @param {*} action an instance of {@link Action}.
     */
    invoke(action) {
        if (action == null) {
            throw Error("Action cannot be null !");
        }
        if (!(action instanceof Action)) {
            throw Error("An action interface instance is required !");
        }
        action.run([0, 1, 2]);
    }
}
/**
 * Creates and runs a task.
 * 
 * @author pavl_g.
 */
class Task {
    static main(args) {
        const action = new Action();
        action.run = function run(args) {
            alert("Hey invoked from an interface with some params : " + args);
        }

        const test = new TestInjector();
        test.invoke(action);
        return 0;
    }
}

Task.main(0);