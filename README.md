# Parcel plugin minmal example

and example repo to figure out if there is a bug in the resolving of dependencies 
with a file refernce in package.json

# Expected behavior

Your able to run parcel and it will find the parcel-plugin-example.

# Current behavior

give and error message:

`error Couldn't find package "parcel-plugin-example" on the "npm" registry.`


# How to reproduce 

```bash 
cd parcel-example
yarn install
yarn start
```

yarn install will find the parcel-plugin-example and install it.
But parcel is still complaining 