/**
 * Shows the basics of js and ts implementing a single ton with
 * a synchronized instancing.
 * 
 * @author pavl_g.
 */
class SingleTon {
    static instance;
    x;
    y;
    projectName;

    constructor(stamp, x, y, projectName) {
       // lock the stamp
       stamp.lock();

       this.x = x;
       this.y = y;
       this.projectName = projectName;
    }

    static getDefaultInstance(stamp, x, y, projectName) {
        // sanity check the inputs.
        if (! (stamp instanceof StampBuilder)) {
            throw Error("Stamp is not a real stamp !");
        }

        if (this.instance == null) {
            if (!stamp.isLocked()) {
                this.instance = new SingleTon(stamp, x, y, projectName);
            }
            stamp.unlock();
        }
        return this.instance;
    }
    
     showProjectDialog() {
        return alert(this.projectName);
    }
}

/**
 * Create a dead locker using Stamps.
 * 
 * @author pavl_g.
 */
class StampBuilder {
    stamp;
    static STAMP_LOCK = 500;
    static STAMP_UNLOCK = 0;

    constructor(stamp) {
        this.stamp = stamp;
    }
    lock(stamp) {
        return this.stamp = StampBuilder.STAMP_LOCK;
    }
    unlock() {
        return this.stamp = StampBuilder.STAMP_UNLOCK;
    }
    isLocked() {
        return this.stamp == StampBuilder.STAMP_LOCK;   
    }
}

class Process {
    static main(args) {
        var stamp = StampBuilder.STAMP_UNLOCK;
        var stampBuilder = new StampBuilder(stamp);

        var singleTon = SingleTon.getDefaultInstance(stampBuilder, screenX, screenY, "basics");
        if (singleTon instanceof SingleTon) {            
            singleTon.showProjectDialog();
        }

        var singleTon2 = SingleTon.getDefaultInstance(stampBuilder, screenX, screenY, "basicsw");
        if (singleTon2 instanceof SingleTon) {
            singleTon2.showProjectDialog();
        }
        return 0;
    }
}

Process.main(0);

