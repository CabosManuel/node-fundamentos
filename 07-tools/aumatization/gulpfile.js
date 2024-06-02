import gulp from 'gulp';
import server from 'gulp-server-livereload';

// Crear una tarea
gulp.task('build', (cb) => {
  console.log('Building site');
  setTimeout(cb, 3000);
});

gulp.task('serve', (cb) => {
  gulp.src('www')
    .pipe(server({
      livereload: true, // Se actualiza al cambiar el código
      open: true // Automáticamente abre el código
    }));
});

// Crear tareas en serie
gulp.task('default', gulp.series('build', 'serve'));