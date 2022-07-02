output "dev_url" {
  value       = heroku_app.develop.web_url
  description = "Develop - Application URL"
}

output "staging_url" {
  value       = heroku_app.staging.web_url
  description = "Staging - Application URL"
}


output "production_url" {
  value       = heroku_app.production.web_url
  description = "Production - Application URL"
}
