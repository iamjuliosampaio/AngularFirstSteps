using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularFirstSteps.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularFirstSteps.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  [ApiController]
  public class NotesController : ControllerBase
  {
    private static List<Note> notes = new List<Note>();
    private static int count = 0;

    static NotesController()
    {
      Note note1 = new Note
      {
        Id = count++,
        Title = "30 min run",
        Description = "It's important to your health"
      };
      Note note2 = new Note
      {
        Id = count++,
        Title = "Call the plumber",
        Description = "To fix the plumbing"
      };
      notes.Add(note1);
      notes.Add(note2);
    }

    // GET api/notes
    [HttpGet]
    public IEnumerable<Note> Get()
    {
      return notes;
    }

    // GET api/notes/5
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
      return Ok(notes.Where(note => note.Id == id).FirstOrDefault());
    }

    // POST api/notes
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Note note)
    {
      note.Id = count++;
      notes.Add(note);
      return CreatedAtAction("Get", new { id = note.Id }, note);
    }

    // PUT api/notes/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] Note note)
    {
      Note found = notes.Where(n => n.Id == id).FirstOrDefault();
      found.Title = note.Title;
      found.Description = note.Description;

      return NoContent();
    }

    // DELETE api/notes/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      notes.RemoveAll(n => n.Id == id);

      return NoContent();
    }
  }
}
