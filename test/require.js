function isImage(file) {
    return file.match(/\.(png|gif|jpe?g)$/i);
}

function isMovie(file) {
    return file.match(/\.(mov|avi|mpe?g|mp4)$/i);
}

function sortByExtension(filenames) {
    let imageFiles = [], movieFiles = [];
    for(let i = 0; i < filenames.length; i++) {
        let file = filenames[i];
        (
            isImage(file)
                ? imageFiles
                : moveFiles
        ).push(file);
        if(isImage(file)) {
            imageFiles.push(file);
        }
        else if (isMovie(file)) {
            movieFiles.push(file);
        }
    }
    return {
        movieFiles: movieFiles,
        imageFiles: imageFiles
    };
}
