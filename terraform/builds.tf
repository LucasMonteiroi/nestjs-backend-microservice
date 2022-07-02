resource "heroku_build" "develop" {
  app = heroku_app.develop.id

  source {
    path = var.project_app_path
  }
}

resource "heroku_build" "staging" {
  app = heroku_app.staging.id

  source {
    path = var.project_app_path
  }
}

resource "heroku_build" "production" {
  app = heroku_app.production.id

  source {
    path = var.project_app_path
  }
}
