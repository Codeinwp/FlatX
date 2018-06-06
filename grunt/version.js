/**
 * Version File for Grunt
 *
 * @package belise
 */
/* jshint node:true */
// https://github.com/kswedberg/grunt-version
module.exports = {
    package_ti: {
        options: {
            prefix: '"version"\\:\\s+"'
        },
        src: 'package.json'
    },
    style: {
        options: {
            prefix: 'Version\\:\\s+'
        },
        src: 'style.css'
    },
};