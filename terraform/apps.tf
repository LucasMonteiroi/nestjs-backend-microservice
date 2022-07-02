resource "heroku_app" "develop" {
  name   = "${var.project_name}-develop"
  region = var.heroku_develop.region

  buildpacks = var.heroku_develop.buildpacks
}

resource "heroku_app" "staging" {
  name   = "${var.project_name}-staging"
  region = var.heroku_staging.region


  buildpacks = var.heroku_staging.buildpacks
}

resource "heroku_app" "production" {
  name   = "${var.project_name}-production"
  region = var.heroku_production.region


  buildpacks = var.heroku_production.buildpacks
}
