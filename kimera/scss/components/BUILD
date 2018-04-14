package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_library")

sass_library(
    name = "components",
    srcs = ["_all.scss"],
    deps = [
        "blockquote",
        "box",
        "buttons",
        "chip",
        "dropdown",
        "forms",
        "icons",
        "progress",
        "range",
        "tags",
        "togglebutton",
        "tooltip",
        "//kimera/scss/base:partials",
        "//kimera/scss/base:placeholders",
    ],
)

sass_library(
    name = "tooltip",
    srcs = ["_tooltip.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "togglebutton",
    srcs = ["_toggle-button.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "tags",
    srcs = ["_tags.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "blockquote",
    srcs = ["_blockquote.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "icons",
    srcs = ["_icons.scss"],
    deps = [
        "//kimera/scss/base:partials",
        "//kimera/scss/base:placeholders",
    ],
)

sass_library(
    name = "buttons",
    srcs = ["_buttons.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "chip",
    srcs = ["_chip.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "dropdown",
    srcs = ["_dropdown.scss"],
    deps = [
        "//kimera/scss/base:partials",
        "//kimera/scss/base:placeholders",
    ],
)

sass_library(
    name = "forms",
    srcs = ["_forms.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "range",
    srcs = ["_range.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "progress",
    srcs = ["_progress.scss"],
    deps = ["//kimera/scss/base:partials"],
)

sass_library(
    name = "box",
    srcs = ["_box.scss"],
    deps = ["//kimera/scss/base:partials"],
)
