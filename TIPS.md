# Tips

- Say “workflow file” until a run URL and a manifest exist.
- The caller repo owns the C++ path. This repo does not vendor `pxexample.cpp` as the thing being compiled.
- `-Werror` means a warning fails the build. That is intentional for a teaching pin, and it is also why an old CDT image and new headers often disagree.
- Two images in one repo is the bug students hit when they paste the first Docker line they see.
- Day-to-day builds stay on [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler).
