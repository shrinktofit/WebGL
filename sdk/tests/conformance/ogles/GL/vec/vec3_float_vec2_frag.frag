
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;

void main (void)
{
	vec2 b = vec2(53.0, 139.0);
	vec3 a = vec3(13.0, b);
	float gray;
	if( (a[0] == 13.0) && (a[1] == 53.0) && (a[2] == 139.0) )
	gray=1.0;
	else gray=0.0;
	gl_FragColor = vec4(gray, gray, gray, 1.0);
}
