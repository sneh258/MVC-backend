const getControllers = require('./../../src/controllers/toDoControllers');
const getServices = require('./../../src/services/toDoServices');

describe('ToDo Controllers', () => {
    it("should return an array of objects", async () => {
        jest.spyOn(getServices, 'getTasks').mockResolvedValue([
            {
                id: 1
            }
        ]
        )

        const mockReq = {};
        
        const mockRes = {

            status: jest.fn().mockReturnThis(),
            json: jest.fn()

        };
        await getControllers.getTaskshehe(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200)
        expect(mockRes.json).toBeCalledWith(
            [
                {
                    id: 1
                }
            ]
        )
    });

    //getTaskById
    it("should return an array of object", async () => {
        jest.spyOn(getServices, 'getTasksById').mockResolvedValue([
            {
                id: 1
            }
        ]
        )

        const mockReq = {
            params:jest.fn()
        };
        const mockRes = {

            status: jest.fn().mockReturnThis(),
            json: jest.fn()

        };
        await getControllers.getTasksById(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200)
        expect(mockRes.json).toBeCalledWith(
            [
                {
                    id: 1
                }
            ]
        )
    });

    //deleteTasks
    it("should return an array of objects without the deleted task", async () => {
        jest.spyOn(getServices, 'deleteTasks').mockResolvedValue(
            "deleted"
        )

        const mockReq = {
            params:jest.fn()
        };
        
        const mockRes = {

            status: jest.fn().mockReturnThis(),
            send: jest.fn()

        };
        await getControllers.deleteTasks(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200)
        expect(mockRes.send).toBeCalledWith(
            'deleted'
            
        )
    });

    //updateTasks
    it("should return an array of objects with the updated task", async () => {
        jest.spyOn(getServices, 'updateTasks').mockResolvedValue(
            [
                {
                    id: 1
                }
            ]
            
        )

        const mockReq = {
            params:jest.fn(),
            body:jest.fn()
        };
        
        const mockRes = {

            status: jest.fn().mockReturnThis(),
            send: jest.fn()

        };
        await getControllers.updateTasks(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(200)
        expect(mockRes.send).toBeCalledWith(
            [
                {
                    id: 1
                }
            ]
            
            
        )
    });

    //post tasks
    it("should return an array of objects ", async () => {
        jest.spyOn(getServices, 'postTasks').mockResolvedValue(
            [
                {
                    task: "buy milk"
                }
            ]
        )

        const mockReq = {
            
            body:jest.fn()
        };
        
        const mockRes = {

            status: jest.fn().mockReturnThis(),
            json: jest.fn()

        };
        await getControllers.postTasks(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(201)
        expect(mockRes.json).toBeCalledWith(
           [
            
                {
                    task: "buy milk"
                }
            
        ]
            
        )
       
       

    });


});







