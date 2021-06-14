export function imagevalidator(value, {req}) {
        let filename = typeof value !== "undefined" ? value.filename : '';
        var extension = (path.extname(filename)).toLowerCase();
        switch (extension) {
            case '.jpg':
                return '.jpg';
            case '.jpeg':
                return '.jpeg';
            case  '.png':
                return '.png';
            default:
                return false;
        }
}