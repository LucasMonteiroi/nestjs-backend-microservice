# Addons

# Develop database
resource "heroku_addon" "develop" {
  app  = heroku_app.develop.name
  plan = var.heroku_develop.database
}

# Staging database
resource "heroku_addon" "staging" {
  app  = heroku_app.staging.name
  plan = var.heroku_staging.database
}

# Production database
resource "heroku_addon" "production" {
  app  = heroku_app.production.name
  plan = var.heroku_production.database
}
