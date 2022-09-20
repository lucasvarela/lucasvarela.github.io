# My personal website

## How to run locally:

I'm  using ruby via [rvm](https://github.com/rvm/ubuntu_rvm). After ruby is installed:

```
gem install jekyll bundler
bundle install
bundle update --bundler
bundle exec jekyll build
bundle exec jekyll serve
```

To deploy to `gh-pages` do:
```
./bin/deploy
```
That will create a brach, run serve, generate _site folder with all the generate website, delete everything else and make that folder the root. Source code will remain in master. Do not use `--user` flag, otherwise main code will be removed (more details [here](https://github.com/alshedivat/al-folio/blob/master/README.md)). 

## Notes

* The blog is temporarily disabled, to re-add it to the website go to header.html and uncomment that section
* The teaching page is assumed to be a static description of courses but it can be converted to a collection similar to _projects/ so that there is a dedicated page for each course.

## Credits

Theme: [al-folio](https://github.com/alshedivat/al-folio) ([demo](https://alshedivat.github.io/al-folio))

