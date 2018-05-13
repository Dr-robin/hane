import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

let config = {};

try {
    config = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../../config.yaml')).toString()) || {};
}
catch(e) {
    console.error(e.toString());
    process.exit(e.errno);
}

export default {
    getValue(name, defaultValue = undefined) {
        const argc = name.split('.');
        let resultValue = config;
        return argc.every((prop) => {
            resultValue = resultValue[prop];
            return resultValue !== undefined;
        }) ? resultValue : defaultValue;
    }
};