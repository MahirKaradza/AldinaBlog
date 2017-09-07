module.exports = function(grunt){
    //Project configuration
    grunt.initConfig({

        watch: {
            sass: {
                files: [
                    "preBuild/Sass/*.scss"
                ],
                tasks: [
                    "sass"
                ]
                },
            },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                   'CSS/style.css': 'preBuild/Sass/style.scss'
                }
            }
        }
    });
     

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    //Default plugins
    grunt.registerTask('default', ['sass', 'watch']);

}