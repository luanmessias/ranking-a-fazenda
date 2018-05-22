module.exports = function (grunt) {
    'use strict';

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');

	grunt.initConfig({
   	sass: {
			dist: {
				options: { style: 'compressed', sourcemap: 'auto' },
				files: {
					'../../public/stylesheets/style.css': '../sass/style.scss'
				}
			}
		}, // sass

		notify: {
			sass: {
				options: {
					title: "CSS Files built",
					message: "Sass task complete"
				}
			}
		}, // Notify

		watch: {
			css: {
				files: '../sass/**/*.scss',
				tasks: ['sass', 'notify:sass']
			},
		}, // watch
	});

	// Tarefas que serão executadas
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('w', ['watch']);
};