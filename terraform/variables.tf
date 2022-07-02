variable "project_app_path" {
  type        = string
  description = "app source path to deploy"
}
variable "project_name" {
  type        = string
  description = "heroku app name will be created"
}

variable "heroku_develop" {
  type = object({
    replications = number       # Replication numbers
    stack        = string       # web, container and etc
    region       = string       # us or eu
    buildpacks   = list(string) # ["heroku/nodejs"]
    size         = string       # free, hobby, standard-1x/2x, performance-m/i
    database     = string       # heroku-postgresql:hobby-dev
  })
}

variable "heroku_staging" {
  type = object({
    replications = number       # Replication numbers
    stack        = string       # web, container and etc
    region       = string       # us or eu
    buildpacks   = list(string) # ["heroku/nodejs"]
    size         = string       # free, hobby, standard-1x/2x, performance-m/i
    database     = string       # heroku-postgresql:hobby-dev
  })
}

variable "heroku_production" {
  type = object({
    replications = number       # Replication numbers
    stack        = string       # web, container and etc
    region       = string       # us or eu
    buildpacks   = list(string) # ["heroku/nodejs"]
    size         = string       # free, hobby, standard-1x/2x, performance-m/i
    database     = string       # heroku-postgresql:hobby-dev
  })
}

