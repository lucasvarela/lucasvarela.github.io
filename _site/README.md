# My personal website

## How to run locally:

I'm  using ruby via rvm

```
gem install jekyll bundler
bundle install
bundle update --bundler
bundle exec jekyll serve
```

To deploy to github pages do:
```
./bin/deploy --user
```

## Notes

* The blog is temporarily disabled, to re-add it to the website go to header.html and uncomment that section
* The teaching page is assumed to be a static description of courses but it can be converted to a collection similar to _projects/ so that there is a dedicated page for each course.

## Credits

Theme: [al-folio](https://github.com/alshedivat/al-folio)

