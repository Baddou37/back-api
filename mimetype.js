/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const mimeMap = {
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'tiff': 'image/tiff',
    'tif': 'image/tiff',
    'bmp': 'image/bmp',
    'heic': 'image/heic',
    'heif': 'image/heif',
    'dcm': 'image/dcm'
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    const extension = maFonction(FNAME.toLowerCase());
    console.log(mimeMap[extension] || 'UNKNOWN')
}

function maFonction(fname) {
    const lastIndex = fname.lastIndexOf('.');
    if (lastIndex === -1) {
        return ''
    }
    const ext = fname.substring(lastIndex + 1);
    return ext;
}