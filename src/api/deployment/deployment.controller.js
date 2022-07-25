import { create, getAllByPage } from "./deployment.store";
import fs from "fs/promises";

const createDeployment = async(imageId) => {
    try {
        await create(imageId);
        let content = await fs.readFile('count.txt', { encoding: 'utf8' });
        content = +content;
        content++;
        await fs.writeFile('count.txt', '' + content, () => {
            console.log("written to file successfully");
            //go to README to understand why I chose this solution - option 1
        });
    } catch (err) {
        throw (err);
    }
};

const getSortedDeploymentsByPage = async(page) => {
    try {
        const deployments = await getAllByPage(page);
        return deployments;
    } catch (err) {
        throw (err);
    }
};

const getTotalDeploymentsCount = async() => {
    try {
        let content = await fs.readFile('count.txt', { encoding: 'utf8' });
        content = +content;
        // assuming all the servers in the system are updating
        // and reading from the same count.txt file
        return content;
    } catch (err) {
        throw (err);
    }
};

export {
    createDeployment,
    getSortedDeploymentsByPage,
    getTotalDeploymentsCount
};