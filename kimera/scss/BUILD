package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_library")
load("@io_bazel_rules_sass//sass:sass.bzl", "sass_binary")

sass_library(
    name = "config",
    srcs = ["_config.scss"],
)

sass_binary(
    name = "kimera",
    src = "kimera.scss",
    output_style = "expanded",
    deps = [
        "//kimera/scss/base",
        "//kimera/scss/components",
        "//kimera/scss/layoutpkg",
        "//kimera/scss/modules",
        "//kimera/scss/utilities",
    ],
)

#genrule(
#    name = "kimeramin",
#    outs = ["mypath.txt"],
#    cmd = "dir bazel-out",
#)

#exports_files(["kimera.css"])
