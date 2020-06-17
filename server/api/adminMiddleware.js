
/*
    now we can protect our routes that require admin access

    maybe we should get the user from teh database if it exists, and check the
    isAdmin flag on that instance (could someone changes their isAdmin flag on the frontend?)
*/
const adminProtectMiddleWare = async (req, res, next) => {
    try {
        if (!req.user || !req.user.isAdmin) {
            const e = new Error('Access Denied, You Are Not An Admin!');
            e.status = 401;
            throw e;
        }
        // if the user is an admin, jsut go to the next middleware handler
        next();
    }
    catch (e) {
        next(e);
    }
};

module.exports = adminProtectMiddleWare;
