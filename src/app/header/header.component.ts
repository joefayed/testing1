import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
  // ...
} from '@angular/animations';
export class pathClass {
  id: string;
  d: string;
}
const Logo: pathClass[] = [
  {id:"p1",d:"M234.143 2.98386H233.104L232.371 3.72054L121.816 114.833L121.09 115.563L121.088 116.592L120.903 228.076L120.898 230.58H123.403H160.564H163.064V228.08V118.003L273.816 7.25162L278.083 2.98386H272.048H234.143Z"},
  {id:"p2",d:"M51.5954 3.72055L50.8624 2.98386H49.8232H12.2903H6.25478L10.5225 7.25162L103.054 99.7832L104.822 101.551L106.59 99.7832L125.17 81.2026L126.934 79.4393L125.175 77.6715L51.5954 3.72055Z"},
  {id:"p3",d:"M370.92 20.64V27.744H349.992V49.248H368.04V56.352H349.992V84H338.76V20.64H370.92Z"},
  {id:"p4",d:"M438.466 20.64L454.882 84H443.554L439.714 67.872H420.898L417.154 84H406.594L424.162 20.64H438.466ZM422.626 60.768H438.082L430.306 27.84L422.626 60.768Z"},
  {id:"p5",d:"M518.198 54.72V84H506.966V55.872L488.534 20.64H500.822L513.302 46.656L525.11 20.64H536.63L518.198 54.72Z"},
  {id:"p6",d:"M370.92 135.64V142.744H349.992V162.904H368.04V170.008H349.992V191.896H372.264L371.592 199H338.76V135.64H370.92Z"},
  {id:"p7",d:"M437.054 188.824C439.166 188.824 440.862 189.336 442.142 190.36C443.422 191.384 444.062 192.856 444.062 194.776C444.062 196.76 443.358 198.264 441.95 199.288C440.606 200.376 438.878 200.92 436.766 200.92C434.654 200.92 432.958 200.408 431.678 199.384C430.398 198.36 429.758 196.888 429.758 194.968C429.758 192.984 430.43 191.48 431.774 190.456C433.182 189.368 434.942 188.824 437.054 188.824Z"},
  {id:"p8",d:"M504.698 136.024C512.25 135.512 518.906 135.256 524.666 135.256C541.434 135.256 549.818 145.432 549.818 165.784C549.818 188.568 540.666 199.96 522.362 199.96C516.986 199.96 511.098 199.48 504.698 198.52V136.024ZM522.362 193.24C526.842 193.24 530.234 192.12 532.538 189.88C534.842 187.64 536.346 184.696 537.05 181.048C537.754 177.336 538.106 172.696 538.106 167.128C538.106 159.704 537.114 153.656 535.13 148.984C533.146 144.312 529.434 141.976 523.994 141.976C521.626 141.976 518.938 142.136 515.93 142.456V192.664C518.234 193.048 520.378 193.24 522.362 193.24Z"}
];
// const listAnimation = trigger('listAnimation', [
//   transition('* <=> *', [
//     query(':enter',
//     [ 
//       style({
//               'stroke-dashoffset': "647", 
//               fill:"#ff000000"
//             }),
//       stagger('60ms',
//               animate('4500ms ease-out', 
//                       style({'stroke-dashoffset': "0", fill:'green'})
//                       )
//               )
//     ]
//     ),
//     query('#p2',
//     [ 
//       style({
//               transform: 'translate(0px, 0px)'
//             }),
//       stagger('60ms', 
//               animate('1500ms ease-out', 
//                       style({transform: 'translate(-25px, -25px)'})
//                       )
//               )
//     ]
//     )
//   ])
// ]);
const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
    [ 
      style({
              'stroke-dashoffset': "647", 
              fill:"#ff000000"
            }),
      stagger('60ms',
              animate('4500ms ease-out', 
                      style({'stroke-dashoffset': "0", fill:'green'})
                      )
              )
    ]
    )
  ])
]);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[listAnimation]
})
export class HeaderComponent implements OnInit {
  pathes = Logo;
  show2 = true;
  constructor() { }

  ngOnInit(): void {
  }

}