import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm!:FormGroup;
  player:any={};
  id!:number;

  constructor(private activateRoute:ActivatedRoute , private playersSerevice:PlayersService , private router:Router) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
   this.getplayerById();
  }
  getplayerById(){
    this.playersSerevice.getplayerById(this.id).subscribe((result)=>{
      this.player=result.player;
    })
  }
  editPlayer(){
    this.playersSerevice.editplayer(this.player).subscribe((res)=>{
      console.log('here response after edit',res.message)
     this.router.navigate(['admin']);
    })
      }
  }
  

