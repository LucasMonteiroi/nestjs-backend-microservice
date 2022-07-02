resource "heroku_formation" "develop" {
  app        = heroku_app.develop.id
  type       = var.heroku_develop.stack
  quantity   = var.heroku_develop.replications
  size       = var.heroku_develop.size
  depends_on = [heroku_build.develop]
}

resource "heroku_formation" "staging" {
  app        = heroku_app.staging.id
  type       = var.heroku_staging.stack
  quantity   = var.heroku_staging.replications
  size       = var.heroku_staging.size
  depends_on = [heroku_build.staging]
}

resource "heroku_formation" "production" {
  app        = heroku_app.production.id
  type       = var.heroku_production.stack
  quantity   = var.heroku_production.replications
  size       = var.heroku_production.size
  depends_on = [heroku_build.production]
}
