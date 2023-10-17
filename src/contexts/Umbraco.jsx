import { createContext, useEffect, useState } from "react";

export const UmbracoContext = createContext();

export const UmbracoProvider = ({ children, dataset }) => {
    const [rootNode, setRootNode] = useState(null);
    const [data, setData] = useState(null);
    const [dataError, setDataError] = useState(null);
    useEffect(() => {
        if (dataset) {
            setRootNode(dataset.nodeId);
        }
    }, [dataset]);

    useEffect(() => {
        if (rootNode) {
            fetch(`/headless/${rootNode}`)
                .then(res => {
                    if (res.status !== 404) {
                        return res.json();
                    } else {
                        throw "Id does not exist";
                    }
                })
                .then(json => {
                    let formatted = JSON.stringify(json).replace(/https\:\/\/via.placeholder.com/g, "/media");
                    let parsed = JSON.parse(formatted);
                    setData(parsed);
                })
                .catch(err => {
                    console.error(err);
                    setDataError(err);
                });
        }
    }, [rootNode]);


    return (
        <UmbracoContext.Provider value={{ rootNode, data, dataError }}>{children}</UmbracoContext.Provider>
    );
};