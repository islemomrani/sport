import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm!: FormGroup;
  apiResult: any;
  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherForm = this.formBuilder.group({
      city: ['', [Validators.required]]
    })
  }

  search() {
    let weather = this.weatherForm.value;
    this.weatherService.weather(weather).subscribe((result) => {
      console.log('here api result', result.apiRes);
      this.apiResult = result.apiRes;
    });

  }


}
