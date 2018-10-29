library(shinydashboard)

ui <- dashboardPage(
  dashboardHeader(title = "Welcome!"),
  dashboardSidebar(
    sidebarMenu(
      menuItem("Personal Info", tabName = "dashboard", icon = icon("dashboard")),
      menuItem("Research", tabName = "widgets", icon = icon("th"))
    )
  ),
  dashboardBody(
    tabItems(
      # First tab content
      tabItem(tabName = "dashboard",
              tags$img(src = "img1.jpg",height = 300, width = 450),
              tags$h2("Welcome to Tiankang's Space"),
              tags$hr(style = "border-color: blue;"),
              tags$p(tags$p("My name is Tiankang Xie. This is my virtual space and I'm glad that you found it")),
              tags$h2("About Me"),
              tags$hr(style = "border-color: red;"),
              tags$p("Some of my general interests include:"),
              tags$ul(
                tags$li("Mathematical Modelling"),
                tags$li("Skiing"),
                tags$li("Machine Learning"), 
                tags$li("Russian Literature"),
                tags$li("Computational Anatomy"),
                tags$li("Badminton")
              ),
              tags$h2("Contact"),
              tags$hr(style = "border-color: yellow;"),
              tags$p("Office: 6730 MSC"),
              tags$h2("Education:"),
              tags$hr(style = "border-color: green;"),
              tags$ul(
                tags$li("B.S. 2018   Mathematics & Statistics, ",tags$a(href = "www.wisc.edu","University of Wisconsin-Madison")),
                tags$li("High School Diploma. 2014, ",tags$a(href = "https://www.szzx1000.com", "Suzhou High School of Jiangsu Province"))
              ),
              tags$h2("Personal Resume"),
              tags$hr(style = "border-color: orange;"),
              tags$a(href="https://drive.google.com/open?id=1UghSNz6FRBew3swiZWTNJHLbv3lSMOVg","My CV")
              
      ),
      
      # Second tab content
      tabItem(tabName = "widgets",
              h2("Specific Research So far"),
              tags$hr(style = "border-color: yellow;"),
              tags$ul(
                tags$li("Heat Kernel Smoothing"),
                tags$li("Topological data tools"),
                tags$li("Mathematical tools for big data")
              ),
              tags$p("Mentor for B.S:  Prof. Moo. K Chung"),
              tags$p(tags$a(href="http://www.stat.wisc.edu/~mchung/","See what my mentor is doing!")),
              tags$p(tags$a(href="https://drive.google.com/open?id=1LP70EbNywAm3DFcNl9y9vAgN2xgSFowf","See my Research Paper for Mathematical tools"))
      )
    )
  )
)

server <- function(input, output) {

}

shinyApp(ui, server)