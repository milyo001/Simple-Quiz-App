using Microsoft.EntityFrameworkCore;
using QuizApi.Models;
using QuizApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<QuizDbContext>(options =>
   options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

// Custom services
builder.Services.AddScoped<IParticipantService, ParticipantService>();
builder.Services.AddScoped<IQuestionService, QuestionService>();

var app = builder.Build();

// Allow cors for the React client side, make sure to remove the slash in the end
app.UseCors(options => options
    .WithOrigins("http://localhost:3000")
        .AllowAnyMethod()
        .AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
