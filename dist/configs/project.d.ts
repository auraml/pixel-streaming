interface Project {
    isDev: boolean;
    apiHost: string;
    name: string;
    package: {
        name: string;
        version: string;
        npmUrl: string;
    };
    license: {
        excludes: string[];
        checkUrl: string;
    };
    urls: {
        main: string;
        docs: string;
        support: string;
        buy: string;
        signalingServer: string;
        onlinePlayer: string;
    };
}
declare const project: Project;
export default project;
